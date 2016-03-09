var _ = require('underscore');

require('typeahead');

module.exports = function() {
	return {
		restrict: 'A',
    	scope: {
    		options: '=?typeaheadOptions',
      		dataProvider: '&typeaheadDataProvider',
      		model: '='
    	},
    	controller: function($scope, $element, $timeout) {
    		var typeaheadOptions = $scope.options,
    			typeaheadDataProviderOptions = {
    				source: $scope.dataProvider()
    			};

    		_.defaults(typeaheadOptions, {
    			hint: true,
        		highlight: true,
        		minLength: 1
    		});

    		$element.typeahead(typeaheadOptions, typeaheadDataProviderOptions);
    		
    		$($element).on('typeahead:select', function() {
		        $timeout(function() {
		        	$scope.model = $element.val();
		        });
		    });
    	}
	};	
};