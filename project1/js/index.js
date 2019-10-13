!(function() {

    var _whichInput

    $(document).click(function() {
        $('#keyboard').hide()
    })

    function keyboard(input) {
        var _input = input

        //key
        function addKeyboardDOM() {
            $('body').append('<ul id="keyboard">\
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
					<li class="keyboard-delete"><span class="glyphicon glyphicon-remove"></span></li>\
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

            if($('#keyboard')[0] === undefined) {
                // append
                addKeyboardDOM()

                $('#keyboard').click(function(e) {
                    e.stopPropagation()
                })

                // choose character group
                $('#keyboard li.keys').click(function() {
                    var _val = $(this).text();
                    var count =1;
                    for(var i=0;i<_val.length;i++){
                        //console.log(_val.charAt(i));
                        $('#option'+count).text(_val.charAt(i));
                        count++;
                    }
                })

                //click the chosen character
                $('#keyboard li.option').click(function() {
                    var _val = $(_whichInput).val() + $(this).text();
                    //console.log(_val)
                    $(_whichInput).val(_val);
                    $(_whichInput).focus();
                })

                //capitalize
                $('#keyboard li.cap').click(function() {
                    $('#keyboard li.keys').each(function(){
                        var _val = $(this).text();
                        $(this).text(capitalDecapitalize(_val));
                        }
                    );
                    $('#keyboard li.option').each(function(){
                            var _val = $(this).text();
                            $(this).text(capitalDecapitalize(_val));
                        }
                    );
                })
                //space
                $('#keyboard li.space').click(function() {
                    var _val = $(_whichInput).val() +' ';
                    $(_whichInput).val(_val);
                    $(_whichInput).focus();
                })

                //delet
                $('#keyboard li.keyboard-delete').click(function() {
                    var _val = $(_whichInput).val();
                    $(_whichInput).val(deleteTab(_val))
                    $(_whichInput).focus();
                })

                //todo: click num/word
                //todo: if click, indicate which has just be clicked
            }
            $('#keyboard').show()
        })

    }

    new keyboard($('input'))

})()
