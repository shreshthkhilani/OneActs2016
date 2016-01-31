$(document).ready(function() {
    var getUrlParameter = function (sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    var r = getUrlParameter("r");

    if (r === 'Adam+deLisle' || 
        r === 'Adam+Mansell' || 
        r === 'Ahmed+Mohieldin' || 
        r === 'Alec+Stablow' || 
        r === 'Alicia+Lu' || 
        r === 'Ashleigh+Morgan' || 
        r === 'Benjamin+Behrend' || 
        r === 'Blake+London' || 
        r === 'Brian+Mendoza' || 
        r === 'Brittany+Bing' || 
        r === 'Carla+Hoge' || 
        r === 'Carly+Miron' || 
        r === 'Chad+Haddad' || 
        r === 'Claris+Park' || 
        r === 'Danny+Fradin' || 
        r === 'David+deLacoste-Azizi' || 
        r === 'Drew+Hawkinson' || 
        r === 'Dylan+Zuniga' || 
        r === 'Elaina+Joseph' || 
        r === 'Elijah+Cory' || 
        r === 'Haley+Mankin' || 
        r === 'Haley+Weiss' || 
        r === 'Harrison+Pharamond' || 
        r === 'Izzy+Korostoff' || 
        r === 'Jaimie+Zhang' || 
        r === 'Jenna+Miller' || 
        r === 'Jordan+Miller' || 
        r === 'Josh+Ogunleye' || 
        r === 'Karyll+Davis' || 
        r === 'Kelsey+Plona' || 
        r === 'Kevin+McNeil' || 
        r === 'Kyla+Balkan' || 
        r === 'Meerie+Jesuthasan' || 
        r === 'Meghan+Swyryn' || 
        r === 'Michael+Jonathan' || 
        r === 'Michaela+Tinkey' || 
        r === 'Mikey+Miller' || 
        r === 'Noah+Lee' || 
        r === 'Olivia+Horn' || 
        r === 'Paddy+Loftus' || 
        r === 'Paul+Batterman' || 
        r === 'Peter+Beik' || 
        r === 'Peter+Snell' || 
        r === 'Ralphie+Flores' || 
        r === 'Sara+Sachs' || 
        r === 'Shreshth+Khilani' || 
        r === 'Sonya+Kaiser' || 
        r === 'Sophia+Griffith-Gorgati' || 
        r === 'Sophie+Pu' || 
        r === 'Susanna+Jaramillo' || 
        r === 'Tahir+Bell' || 
        r === 'Tess+Speranza' || 
        r === 'Zoe+Stoller') {
      r = r.replace('+',' ');
      $('#refname').val(r);
    }

    $("#navUpcoming").addClass("active");
    $("#navUpcoming2").addClass("active");

    $("#venmo-btn").click(function() {
      var url = "https://venmo.com/?txn=pay&recipients=MikeyMiller&audience=public";
      var tcks = $("#ticketNumber").val();
      var amt = tcks * 10;
      /*if (tcks >= 6)
        amt = tcks * 7;*/
      var name = $("#nameInput").val();
      if (name == "") {
        $("#divName").addClass("has-error");
        return false;
      }
      else if (tcks < 1 || tcks % 1 != 0) {
        $("#divTck").addClass("has-error");
        return false;
      }
      var ref = $("#refname").val();
      var day = $("input[name=optionsRadios]:checked").val();
      var amount = "&amount=" + amt;
      var note = "&note=OneActs2016%20Tickets%20(" + encodeURIComponent(name) + "%2C" + tcks + "%2C" + day + "%2C" + encodeURIComponent(ref) + ")";
      url = url + amount + note;
      window.location.href = url;
      return false;
    });

    $("#nameInput").change(function() {
      var name = $("#nameInput").val();
      if (name == "") {
        $("#divName").removeClass("has-success");
        $("#divName").addClass("has-error");
      }
      else {
        $("#divName").addClass("has-success");
        $("#divName").removeClass("has-error");
      }
    });

    $("#ticketNumber").change(function() {
      var t = $("#ticketNumber").val();
      if (t < 1 || t % 1 != 0) {
        $("#divTck").removeClass("has-success");
        $("#divTck").addClass("has-error");
      }
      else {
        $("#divTck").addClass("has-success");
        $("#divTck").removeClass("has-error");
      }
    });
});