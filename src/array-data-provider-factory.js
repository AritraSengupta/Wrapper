module.exports = function() {
    var arrayDataProvider = {};

    arrayDataProvider.init = function(arr) {
        arrayDataProvider.dataArray = arr;
    };

    arrayDataProvider.getDataProvider = function() {
        return function (q, cb) {
            var matches, substringRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(arrayDataProvider.dataArray, function(i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });

            cb(matches);
        };
    };

    return arrayDataProvider;   
};