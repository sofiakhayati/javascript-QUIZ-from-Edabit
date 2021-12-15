const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
  }
 
  function greeting(name) {
  
        if (name in GUEST_LIST)
        {
           
              txt = `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`;
           
        }
        else
        {
           txt = "Hi! I'm a guest.";
        }

     return txt;
    
  }
  console.log(greeting('Randy'));
  console.log(greeting('Norman'));
  console.log(greeting('sofia'));
  