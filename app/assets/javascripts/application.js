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
//= require_tree .


<h1>Welcome#index</h1>
<p>Find me in app/views/welcome/index.html.erb</p>

<html>

  <head>

  </head>

<body>
  <script 'text/javascript'>
    var Image = new Array('images/batteryterminals.jpg', 'images/batterywarning.gif', 'images/brakwarning1.jpg', 'images/brakewarning2.jpg');
    var Image_Number = 0;
    var Image_Length = Image.length - 1;

    function change_image(num) {
      Image_Number = Image_Number + num;

        if (Image_Number > Image_Length) {
          Image_Number = 0;
        }

        if (Image_Number < 0) {
          Image_Number = Image_Length;
        }
        document.slideshow.src=Image[Image_Number];

        return false;

     }
  </script>
  <img src='batteryterminals.jpg' name='slideshow' />

    <table>
      <tr>
        <td align='left'><a href='javascript.html' onclick='return change_image(-1)'>Previous</a></td>
        <td align='right'><a href='javascript:change_image(1)'>Next</a></td>
      </tr>

      <div id='description'>
      </div>
    </table>
</body>


</html>
