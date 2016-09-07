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
    		        	if(newValue)
    		        		elem.datetimepicker('setOptions',{value: new Date(newValue) });
    		        });
    
    			}
    		};
    	});
