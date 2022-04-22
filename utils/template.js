const html = (canchita, horario, fecha) =>{
    return (
        `<html>

    <body>
      <table border="0" cellspacing="0" cellpadding="0"
      style="margin:auto;width:100%;max-width:640px;font-family:Arial;background:#504a3c;border:#dfeff6;border-style:solid;border-width:0px;letter-spacing:0.02em;border-bottom-left-radius:48px;border-bottom-right-radius:48px;border-top-left-radius:48px;border-top-right-radius:48px">
    
      <tbody>
        <tr>
          <td>
            <table width="100%" border="0" cellpadding="0" cellspacing="0"
              background="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXzORwMjQU9pA3WSPaHQChAInTCivbCHfXQQ&usqp=CAU"
              bgcolor="#F6C376"
              style="background-size:cover;background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXzORwMjQU9pA3WSPaHQChAInTCivbCHfXQQ&usqp=CAU');background-color:#f6c376;background-position:65%;height:200px;border-top-left-radius:48px;border-top-right-radius:48px">
              <tbody>
                <tr>
                  <td width="50">&nbsp;</td>
                  <td width="540">
                  </td>
                  <td width="50">&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#F4ECE1">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
              <tbody>
                <tr>
                  <td width="70">&nbsp;</td>
                  <td width="500">
                    <div
                      style="font-family:Arial,'sans-serif';font-size:27px;color:#000;text-align:center;margin-bottom:5px;margin-left:0px;line-height:29px;letter-spacing:0em;padding-top:40px;font-weight:bold">
                      RESERVASTE EN LA SIGUIENTE CANCHITA
                    </div>
                    <center>
                      <div
                        style="width:45px;border-bottom:6px solid #f6c376;text-align:center;margin-bottom:20px;margin-top:20px">
                      </div>
                    </center>
                  </td>
                  <td width="70">&nbsp;</td>
                </tr>
                <tr>
                  <td width="100%" colspan="3">
    
                  
                    <div class="a6S" dir="ltr" style="opacity: 0.01; left: 669.5px; top: 448px;">
                      <div id=":1mh" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" title="Descargar" role="button" tabindex="0"
                        aria-label="Descargar el archivo adjunto " data-tooltip-class="a1V">
                        <div class="akn">
                          <div class="aSK J-J5-Ji aYr"></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#F4ECE1">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
              <tbody>
                <tr>
                  <td width="70">&nbsp;</td>
                  <td width="500">
                    <div
                      style="font-family:Tahoma,'Lucida Sans','DejaVu Sans',Verdana,'sans-serif';font-size:16px;color:#4c4c4c;margin-bottom:20px;margin-left:0px;line-height:30px;letter-spacing:0em;padding-top:0px;border:6px solid #51b2af;padding:5px 0px;background-color:white">
                      <ul>
                        <li>
                          Nombre del local: ${canchita}
                        </li>
                        <li>
                          Horario: ${horario}:00 h
                        </li>
                        <li>
                          Fecha: ${fecha}
                        </li>
                      </ul>
                    </div>
    
    
    
    
                  </td>
                  <td width="70">&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
    

    
        <tr>
          <td style="background-color:#000;border-bottom-left-radius:48px;border-bottom-right-radius:48px">
            <table width="100%" border="0" cellpadding="0" cellspacing="0"
              style="padding-top:5px;border-bottom-right-radius:48px">
              <tbody>
                <tr>
                  <td width="50" valign="bottom">&nbsp;</td>
                  <td width="540">
                    <center>
                      <center><img
                          src="https://res.cloudinary.com/dj3hlonqp/image/upload/v1650611892/samples/WhatsApp_Image_2022-04-22_at_2.14.18_AM_kupjjm.jpg"
                          alt="" style="display:block;max-width:140px;margin-bottom:5px;margin-top:5px"
                          class="CToWUd">
                      </center>
                    </center>
                  </td>
                  <td width="50" align="right" valign="bottom">&nbsp; </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    </body>
    </html>`
    )
}

module.exports = html