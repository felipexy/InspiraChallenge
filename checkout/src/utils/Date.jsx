/**
 * Converts unix timestamp into a time ago string like 2 hours ago
 *
 * @param {string} date unix timestamp
 */
export const timeAgo = (unixTimestamp, currentTime) => {
  
    if (unixTimestamp === undefined){
      return " há 1 seg"
    }
  
    const date = new Date(parseInt(unixTimestamp));
  
    const seconds = Math.floor((currentTime - date) / 1000);
    let interval = Math.floor(seconds / 31536000);
  
    if (interval > 1) {
      return `há ${interval} anos`;
    }
    if (interval === 1) {
      return `há ${interval} ano`;
    }
  
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return `há ${interval} meses`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval === 1) {
      return `há ${interval} mês`;
    }
  
  
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return `há ${interval} dias`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval === 1) {
      return `há ${interval} dia`;
    }
  
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return `há ${interval} horas`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval === 1) {
      return `há ${interval} hora`;
    }
  
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return `há ${interval} mins`;
    }
    interval = Math.floor(seconds / 60);
    if (interval === 1) {
      return `há ${interval} min`;
    }
  
    interval = Math.floor(seconds);
    
    if (interval <= 0){
      return `agora`;
    }
    else {return `há ${interval} segs`;}
  };
  
  /**
   * Converts unix timestamp to current date
   *
   * @param {string} date unix timestamp
   */
  export const currentDate = (unixTimestamp) => {
    const date = new Date(parseInt(unixTimestamp));
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'];
  
    const month = months[date.getMonth() + 1];
    const day = date.getDay();
    const year = date.getFullYear();
    const time = date.toLocaleString('pt-BR', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  
    return `${month} ${day}, ${year} ${time}`;
  };
  
  export const getFormattedDate = (unixTimestamp) => {
    const today = new Date(parseInt(unixTimestamp));
    var dd = today.getDate();
  
    const time = today.toLocaleString('pt-BR', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
  
    if(mm<10) 
    {
        mm='0'+mm;
    } 
  
    return dd+'/'+mm+'/'+yyyy+' - '+time ;
  }
  