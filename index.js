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

    if (r === 'Aashish+Lalani' || r === 'Anaya+Jhaveri' || 
      r === 'Brian+Mendoza' || r === 'Daniel+Katz' || 
      r === 'Elijah+Cory' || r === 'Halima+Said' || 
      r === 'Justin+Lee' || r === 'Kuhuk+Shroff' || 
      r === 'Lucas+Silva' || r === 'Meerabelle+Jesuthasan' || 
      r === 'Monisha+Gulabani' || r === 'Olivia+Ly' || 
      r === 'Pallavi+Surana' || r === 'Percia+Verlin' || 
      r === 'Priyanshi+Pokharna' || r === 'Rohan+Bhide' || 
      r === 'Ryan+Sharafuddin' || r === 'Sanika+Khare' || 
      r === 'Sanjana+Sarkar' || r === 'Sarah+Elnahal' || 
      r === 'Shaishvi+Shrivastava' || r === 'Shreshth+Khilani' || 
      r === 'Shreya+Zaveri' || r === 'Taha+Tariq' || 
      r === 'Vedika+Gopal') {
      r = r.replace('+',' ');
      $('#refname').val(r);
    }

    $("#navUpcoming").addClass("active");
    $("#navUpcoming2").addClass("active");

    $("#venmo-btn").click(function() {
      var url = "https://venmo.com/?txn=pay&recipients=Shreshth&audience=private";
      var tcks = $("#ticketNumber").val();
      var amt = tcks * 8;
      if (tcks >= 6)
        amt = tcks * 7;
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
      var note = "&note=Naatak%20Show%20Tickets%20(" + encodeURIComponent(name) + "%2C" + tcks + "%2C" + day + "%2C" + encodeURIComponent(ref) + ")";
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