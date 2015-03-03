/**
 * Segantii tools
 *
 * @namespace APP
 * @class cookie
 */

APP.namespace.create('mortgage');
APP.cookie = (function ($) {

    var loan, rate, smr, duration, fixedDuration;

    function _setUpForm() {

        $('#calculateButton').click(function(){
            _getForm();
        });
    }
    
    function _calculate() {
        
        //alert("mortgage");
        //_getForm();
        //$("#PMTValue").html("1000");
    }    

    function _getForm(){
        $('.alert').hide();
        //console.log($('#inputLoan').val());
        if(!$('#inputLoan').val()){
            $('#loanError').show();
            //return;
        }else{
            loan = $('#inputLoan').val();
        }
        if(!$('#inputRate').val()){
            $('#rateError').show();
            //return;
        }else{
            rate = $('#inputRate').val();
        }
        if(!$('#inputSMR').val()){
            $('#SMRError').show();
            //return;
        }else{
            smr = $('#inputSMR').val();
        }

        duration = $('#inputDuration').val();

        console.log(duration);

//        _calculate();
    
    }

    function _initialise() {
        
        //alert("mortgage");
        _setUpForm();



        
    }
    
    $(document).ready(function () {

        _initialise();
    });

    return {
        
    };

}(jQuery));
