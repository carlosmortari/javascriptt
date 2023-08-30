const notificacao = {
    async init() {
      const permissao = await Notification.requestPermission()
      if(permissao !== 'granted'){
        throw new Error ('Permissão Negada')
      }
    },
    notify({titulo, body, icon}) {
        new Notification(titulo,{
            body,
            icon
        } )
    }
};

export{notificacao};