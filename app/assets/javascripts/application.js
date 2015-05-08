// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .



// <script "text/javascript">
//     var Image = new Array('batteryterminals.jpg', 'batterywarning.gif', 'brakewarning1.jpg', 'brakewarning2.jpg', 'Letter-AThumb.jpg', 'StarfallABC.jpg');
//     var Image_Number = 0;
//     var Image_Length = Image.length - 1;
//     var refreshIntervalId;

//     function change_image(num) {
//       Image_Number = Image_Number + num;

//         if (Image_Number > Image_Length) {
//           Image_Number = 0;
//         }

//         if (Image_Number < 0) {
//           Image_Number = Image_Length;
//         }
//         document.slideshow.src=Image[Image_Number];

//         return false;

//      }

//     function auto() {
//        refreshIntervalId = setInterval("change_image(1)", 2000);
//     }

//     function stop() {
//       clearInterval(refreshIntervalId);
//     }

//   </script>

//     <div class='container'>
//       <table class='address-format'>
//         <tbody>
//           <tr>
//             <td class='column-1-format'>
//               <img src='Gold Letter A.jpg' alt='Letter A' style="width:304px; height: 228px;"/>
//             </td>
//             <td>
//               <img src="batteryterminals.jpg" alt='Battery Terminals' name="slideshow" style="width:304px; height:228px">
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
// <!--

// <div style="height:250px; width:550px; overflow-x:scroll ; overflow-y: scroll; padding-bottom:10px;">      </div>
//  -->
//     <div class='container'>
//       <table class='nav-format'>
//         <tbody>
//             <tr>
//             <td align="right"><a href="javascript.html" onclick="return change_image(-1)">Previous</a> | </td>
//             <td align="right"><a href="javascript:change_image(1)">Next</a> | </td>
//             <td align="right"><a href="javascript:auto()">Auto</a> | </td>
//             <td align="right"><a href="javascript:stop()">Stop</a></td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//     <hr>
