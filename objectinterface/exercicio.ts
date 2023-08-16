interface Window {
    UserData: any
};

window.UserData = {};

interface UserData {
    nome?: String;
    email?: String;
    cpf?: String;
}

function isUserData(obj: unknown): obj is UserData {
    if (obj && typeof obj === 'object' && ('nome' in obj || 'email' in obj || 'cpf' in obj)) {
        return true
    } else {
        return false
    }
}

const cbFunction = function ({ target }: KeyboardEvent) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem('UserData', JSON.stringify(window.UserData)); 
    }
}

function validJSON(str: string) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
}

function loadLocalStorage() {
    const localUserData = localStorage.getItem('UserData');
    if (localUserData && validJSON(localUserData)) {
      const UserData = JSON.parse(localUserData);
      if (isUserData(UserData)) {
        Object.entries(UserData).forEach(([key, value]) => {
          const input = document.getElementById(key);
          if (input instanceof HTMLInputElement) {
            input.value = value;
            window.UserData[key] = value;
          }
        });
      }
    }
}

loadLocalStorage();

const form =  document.querySelector<HTMLElement>('#form');
form?.addEventListener('keyup', cbFunction);