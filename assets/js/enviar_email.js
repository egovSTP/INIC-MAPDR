function sendMessages() {
  var nameToSend = $("#nameToSend"),
    emailToSend = $("#emailToSend"),
    contactToSend = $("#contactToSend"),
    subjectToSend = $("#subjectToSend"),
    descriptionToSend = $("#descriptionToSend"),
    allFields = $([])
      .add(nameToSend)
      .add(emailToSend)
      .add(contactToSend)
      .add(subjectToSend)
      .add(descriptionToSend);
  (bValid = true), (tips = $("#state_envio"));
  allFields.removeClass("ui-state-error");
  if (nameToSend.val() == "") {
    tips.html("O nome de utilizador n�o deve ser em branco.");
    nameToSend.addClass("ui-state-error");
    nameToSend.focus();
    bValid = false;
  } else if (emailToSend.val() == "") {
    tips.html("O email n�o deve ser em branco.");
    emailToSend.addClass("ui-state-error");
    emailToSend.focus();
    bValid = false;
  } else if (subjectToSend.val() == "") {
    tips.html("O Assunto n�o deve ser em branco.");
    subjectToSend.addClass("ui-state-error");
    subjectToSend.focus();
    bValid = false;
  } else if (descriptionToSend.val() == "") {
    tips.html("O Descri��o n�o deve ser em branco.");
    descriptionToSend.addClass("ui-state-error");
    descriptionToSend.focus();
    bValid = false;
  }
  if (bValid) {
    alert("sdfdsfds");
    methodSendMessage();
  }
}

function methodSendMessage() {
  $("#state_envio").html("<img src='backmapdr/images/preloader-01.gif'/>");
  var nameToSend = $("#nameToSend").val(),
    emailToSend = $("#emailToSend").val(),
    contactToSend = $("#contactToSend").val(),
    subjectToSend = $("#assuntoToSend").val(),
    descriptionToSend = $("#descriptionToSend").val();
  $.post(
    "ajax/envio.php",
    {
      nameToSend: nameToSend,
      emailToSend: emailToSend,
      contactToSend: contactToSend,
      subjectToSend: subjectToSend,
      descriptionToSend: descriptionToSend,
    },
    function (data) {
      var result = parseInt(data.text);
      if (result > 0) {
        $("#state_envio").html("<p>Os seus dados foram enviado com exito!</p>");
        setTimeout(function () {
          location.reload();
        }, 1000);
      } else {
        $("#state_envio").html("<p>Envio dos dados falhada!</p>");
      }
    },
    "json"
  );
}
