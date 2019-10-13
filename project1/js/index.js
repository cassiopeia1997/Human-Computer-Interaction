!(function() {

    var _whichInput, _whichType

    $(document).click(function(e) {
        $('#Jkeyboard').hide()
    })

    function Jkeyboard(input) {
        var _input = input

        //key
        function addJkeyboardDOM() {
            $('body').append('<ul id="Jkeyboard">\
					<li class="keys">abc</li>\
					<li class="keys">def</li>\
					<li class="keys">ghi</li>\
					<li class ="option" id="option1"></li>\
					<li class="keys">jkl</li>\
					<li class="keys">mno</li>\
					<li class="keys">pqrs</li>\
					<li class ="option" id="option2"></li>\
					<li class="keys">tuv</li>\
					<li class="keys">wxyz</li>\
					<li class="cap">CAPS</span</li>\
                    <li class ="option" id="option3"></li>\
					<li>Num</li>\
					<li class="space">space</li>\
					<li class="Jkeyboard-delete"><span class="glyphicon glyphicon-remove"></span></li>\
                    <li class ="option" id="option4"></li>\
					</ul>')
        }

        function deleteTab(val) {
            return val.substr(0, val.length - 1)
        }
        function capitalDecapitalize(_val){
            var _newVal = '';
            for(var i=0;i<_val.length;i++){
                var char =  _val.charAt(i);
                if(char.toUpperCase() != char.toLowerCase()){
                    if(char>'Z'){
                        _newVal +=char.toUpperCase();
                    }else {
                        _newVal += char.toLowerCase();
                    }
                }
            }
            return _newVal;
        }

        $(_input).click(function(e) {
            e.stopPropagation()
            _whichInput = this

            if($('#Jkeyboard')[0] === undefined) {
                // append
                addJkeyboardDOM()

                $('#Jkeyboard').click(function(e) {
                    e.stopPropagation()
                })

                // choose character group
                $('#Jkeyboard li.keys').click(function() {
                    // input里原有的值 + 新输入的值
                    var _val = $(this).text();
                    var count =1;
                    for(var i=0;i<_val.length;i++){
                        //console.log(_val.charAt(i));
                        $('#option'+count).text(_val.charAt(i));
                        count++;
                    }
                })
                //click the chosen character
                $('#Jkeyboard li.option').click(function() {
                    // input里原有的值
                    var _val = $(_whichInput).val() + $(this).text();
                    //console.log(_val)
                    $(_whichInput).val(_val);
                    $(_whichInput).focus();
                })
                //capitalize
                $('#Jkeyboard li.cap').click(function() {
                    $('#Jkeyboard li.keys').each(function(){
                        var _val = $(this).text();
                        $(this).text(capitalDecapitalize(_val));
                        }
                    );
                    $('#Jkeyboard li.option').each(function(){
                            var _val = $(this).text();
                            $(this).text(capitalDecapitalize(_val));
                        }
                    );


                })
                //space
                $('#Jkeyboard li.space').click(function() {
                    var _val = $(_whichInput).val() +' ';
                    $(_whichInput).val(_val);
                    $(_whichInput).focus();
                })

                //delet
                $('#Jkeyboard li.Jkeyboard-delete').click(function() {
                    var _val = $(_whichInput).val();
                    $(_whichInput).val(deleteTab(_val, _whichType))
                    $(_whichInput).focus();
                })
            }
            $('#Jkeyboard').show()
        })

    }

    new Jkeyboard($('input[phone]'), 'phone')

})()
