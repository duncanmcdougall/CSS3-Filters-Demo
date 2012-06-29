$(function()
      {
          $('#hueRotateRange').change(function()
                                      {
                                          $('.hueRotateFull img').css('-webkit-filter', 'hue-rotate('+$(this).val()+'deg)');
                                          $('.hueRotateFull span').text($(this).val());
                                      });
          $('#grayscaleRange').change(function()
                                      {
                                          $('.grayscaleFull img').css('-webkit-filter', 'grayscale('+$(this).val()+'%)');
                                          $('.grayscaleFull span').text($(this).val());
                                      });
          $('#sepiaRange').change(function()
                                      {
                                          $('.sepiaFull img').css('-webkit-filter', 'sepia('+$(this).val()+'%)');
                                          $('.sepiaFull span').text($(this).val());
                                      });       
          $('#blurRange').change(function()
                                      {
                                          $('.blurFull img').css('-webkit-filter', 'blur('+$(this).val()+'px)');  
                                          $('.blurFull span').text($(this).val());
                                      });   
          $('#brightnessRange').change(function()
                                      {
                                          $('.brightnessFull img').css('-webkit-filter', 'brightness('+$(this).val()+'%)');
                                          $('.brightnessFull span').text($(this).val());
                                      });  
          $('#contrastRange').change(function()
                                      {
                                          $('.contrastFull img').css('-webkit-filter', 'contrast('+$(this).val()+'%)');
                                          $('.contrastFull span').text($(this).val());
                                      });
          $('#invertRange').change(function()
                                      {
                                          $('.invertFull img').css('-webkit-filter', 'invert('+$(this).val()+'%)');
                                          $('.invertFull span').text($(this).val());
                                      });
          $('#saturateRange').change(function()
                                      {
                                          $('.saturateFull img').css('-webkit-filter', 'saturate('+$(this).val()+'%)');
                                          $('.saturateFull span').text($(this).val());
                                      });
          
          $('.thumbnail a').click(function()
                                  {
                                        $('.fullView').hide();
                                        $($(this).data('fullview')).show();
                                  });
      });