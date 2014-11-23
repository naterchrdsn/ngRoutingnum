'use strict';

/**
 * A really simple directive for a routing number search field
 * Routing number search API: http://www.routingnumbers.info/api/index.html
 *
 * Usage:
 *
 * <input type="text"  ng-routingnum ng-model="routingnumber" />
 *
 * + ng-model - textbox value
 *
 *TODO: Add configurable options, output methods
 * 
 *
**/

angular.module( "ngRoutingnum", [])
  .directive('ngRoutnumsearch', function () {
    return {
      link: function (scope, element, controller) {



        //Bind lookup to input blur
        element.bind('blur', function () {
          if ($(element[0]).val()) {
            var routing_num_in = $(element[0]).val();
            var routLookup = function (routeIn) {
              $.ajax({
                url: 'https://routingnumbers.herokuapp.com/api/name.json?rn=' + routeIn,
                dataType: 'jsonp',
                success: function (routeData) {
                  //DO SOMETHING WITH THE DATA
                }
              });
            };
            routLookup(routing_num_in);
          }
        });
      }
    };
  });
});