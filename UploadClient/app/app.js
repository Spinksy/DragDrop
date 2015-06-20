(function () {
    'use strict';

    angular.module('fileUploader', [])
        .controller('uploadController', uploadControl);
    //.directive('dragAndDrop', dragAndDropDirective)
    
    function uploadControl() {
        var vm = this;
        vm.pulse = ".";
    };

    //function dragAndDropDirective() {
    //    return {
    //        restrict: 'A',
    //        scope: { files: '='},
    //        link: function (scope, elem, attr) {
    //            elem.bind('dragover', function (e) {
    //                e.stopPropagation();
    //                e.preventDefault();
    //                e.dataTransfer.dropEffect = 'copy';
    //            });

    //            elem.bind('dragenter', function (e) {
    //                e.stopPropagation();
    //                e.preventDefault();
    //                scope.$apply(function () {
    //                    scope.divClass = 'on-drag-enter';
    //                });
    //            });

    //            elem.bind('dragleave', function (e) {
    //                e.stopPropagation();
    //                e.preventDefault();
    //                scope.$apply(function () {
    //                    scope.divClass = '';
    //                });
    //            });

    //            elem.bind('drop', function (e) {
    //                var dropped = e.dataTransfer.files[0];
    //                e.stopPropagation();
    //                e.preventDefault();

    //                alert(dropped.name);
    //                scope.files.push(dropped);

    //            });
    //        }
    //    };
    //};

    //Drag and drop directive
    //http://jsfiddle.net/lsiv568/fsfPe/10/

})();