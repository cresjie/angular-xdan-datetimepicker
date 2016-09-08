angular.module('XdanDatetimepicker',[])
      .directive('xdanDatetimepicker', function(){
    		return {
    			require: '?ngModel',
    			restrict: 'AE',
    			link: function(scope, elem, attr, ngModel) {
    				elem.datetimepicker(scope.$eval(attr.xdanDatetimepicker)).on('change.xdsoft', function(){
    					ngModel.$setViewValue(this.value); 
    				});
    
    				scope.$watch(attr.ngModel, function(newValue){
    		        	if(newValue){
		        		
		        		var date = new Date(newValue);

		        		if(isNaN(date.getTime())) {
		        			var dateformatter = new DateFormatter;
		        			try{
		        				date = dateformatter.parseDate(newValue, attr.xdanDatetimepickerParseformat);
		        			}catch(e) {
		        				console.error('Unable to parse initial Date format. Please specify xdan-datetimepicker-parseformat attribute in the element inorder to parse the date correctly.');
		        			}
		        			
		        		}

		        		elem.datetimepicker('setOptions',{value: date })
		        		
		        	}
    		        });
    
    			}
    		};
    	});
