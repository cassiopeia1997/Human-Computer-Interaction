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
					<li class="cap"><span class="glyphicon glyphicon-arrow-up"></span</li>\
                    <li class ="option" id="option3"></li>\
					<li class ="switch">n/w</li>\
					<li class="space">_</li>\
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
                $('#keyboard').on('click','li.keys',function() {
                    var _val = $(this).text();
                    var count =1;
                    for(var i=0;i<_val.length;i++){
                        //console.log(_val.charAt(i));
                        $('#option'+count).text(_val.charAt(i));
                        count++;
                    }
                })

                // click the number
                $('#keyboard').on('click','li.nums',function() {
                    var _val = $(_whichInput).val() + $(this).text();
                    $(_whichInput).val(_val);
                    $(_whichInput).focus();
                })


                //click the chosen character
                $('#keyboard').on('click','li.option',function() {
                    var _val = $(_whichInput).val() + $(this).text();
                    //console.log(_val)
                    $(_whichInput).val(_val);
                    $(_whichInput).focus();
                })

                //capitalize
                $('#keyboard').on('click','li.cap',function() {
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
                $('#keyboard').on('click', 'li.space',function() {
                    var _val = $(_whichInput).val() +' ';
                    $(_whichInput).val(_val);
                    $(_whichInput).focus();
                })

                //delet
                $('#keyboard').on('click','li.keyboard-delete',function() {
                    var _val = $(_whichInput).val();
                    $(_whichInput).val(deleteTab(_val));
                    $(_whichInput).focus();
                })

                //clear
                $('#keyboard').on('click','li.clear',function() {
                    $(_whichInput).val("");
                    $(_whichInput).focus();
                })
                
                // word to num
                $('#keyboard').on('click','li.switch',function() {
                    $('#keyboard').empty()
                    $('ul').append('<li class="nums">1</li>\
					<li class="nums">2</li>\
					<li class="nums">3</li>\
					<li class ="clear">C</li>\
					<li class="nums">4</li>\
					<li class="nums">5</li>\
					<li class="nums">6</li>\
					<li class ="sign" id="sign2"></li>\
					<li class="nums">7</li>\
					<li class="nums">8</li>\
					<li class="caps">9</span</li>\
                    <li class ="sign" id="sign3"></li>\
					<li class = "switch2">n/w</li>\
					<li class="space">_</li>\
					<li class="keyboard-delete"><span class="glyphicon glyphicon-remove"></span></li>\
                    <li class ="nums">0</li>'
                    )
                })
                
                // num to word
                $('#keyboard').on('click','li.switch2',function() {
                    $('#keyboard').empty()
                    $('ul').append('<li class="keys">abc</li>\
					<li class="keys">def</li>\
					<li class="keys">ghi</li>\
					<li class ="option" id="option1"></li>\
					<li class="keys">jkl</li>\
					<li class="keys">mno</li>\
					<li class="keys">pqrs</li>\
					<li class ="option" id="option2"></li>\
					<li class="keys">tuv</li>\
					<li class="keys">wxyz</li>\
					<li class="cap"><span class="glyphicon glyphicon-arrow-up"></span</li>\
                    <li class ="option" id="option3"></li>\
					<li class = "switch">n/w</li>\
					<li class="space">_</li>\
					<li class="keyboard-delete"><span class="glyphicon glyphicon-remove"></span></li>\
                    <li class ="option" id="option4"></li>'
                    )
                })



                //todo: click num/word
                //todo: if click, indicate which has just be clicked
            }
            $('#keyboard').show()
            
        })

    }

    new keyboard($('input'))

})()
