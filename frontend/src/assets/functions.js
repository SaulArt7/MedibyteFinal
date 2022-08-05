


function alert(message, type) {

    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    var alertTrigger = document.getElementById('liveAlertBtn')
    var alertTrigger2 = document.getElementById('liveAlertBtn2')
    var alertTrigger3 = document.getElementById('liveAlertBtn3')

   
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

function Alert2 {
    if (alertTrigger || alertTrigger2 || alertTrigger3 ) {
        alertTrigger.addEventListener('click', function () {
          alert('Tu cita, con los datos de tu perfil ha sido agendada', 'success')
        })
        alertTrigger2.addEventListener('click', function () {
          alert('Tu cita, con los datos de tu perfil ha sido agendada', 'success')
        })
        alertTrigger3.addEventListener('click', function () {
          alert('Tu cita, con los datos de tu perfil ha sido agendada', 'success')
        })
      }
}

