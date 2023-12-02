import {Injectable} from '@angular/core';
import {ReplaySubject} from "rxjs";
import {Preferences} from "@capacitor/preferences";


export interface IpAdress {
  ip: string;
  city: string;
  region: string;
}

@Injectable({
  providedIn: 'root'
})
export class MyIpGetStorageDataService {


  private _adresses: IpAdress[] = []


  private AdressesSubject$ = new ReplaySubject<IpAdress[]>(1)

  get IpAdresses$() {
    return this.AdressesSubject$.asObservable();
  }

  constructor() {
    // pokud najdu nejakou value v tech preferences tak ji nastavim do toho adresses a jinak vypise ...neco... :D
    Preferences.get({key: "adresses"}).then(data => { // takze tohle se ulozi jako capacitor.neco. adress
      if (!!data.value) {
        this._adresses = JSON.parse((data.value));
      }
      this.AdressesSubject$.next(this._adresses);//next dalsi iterace, verze dalsich dat...
    })

  }

  async addToStorage(ip: string, city: string, region: string) {

    let result = this._adresses.find(item => item.ip === ip);

    if (result) {
      return false;
    }


    try {
      this._adresses.unshift({ip: ip, city: city, region: region});//dava na zacatek pole...
      this.AdressesSubject$.next(this._adresses);
      await Preferences.set({ // promise je objekt, ktery rika "ja ti neco vratim, ale az za chvilku"///
        key: "adresses",
        value: JSON.stringify(this._adresses)
      });
      return true;
    } catch (error) {
      // In case of any error, return false
      return false;
    }
  }


  async deleteIp(index: number) {
    this._adresses.splice(index, 1);
    this.AdressesSubject$.next(this._adresses);
    await Preferences.set({ // promise je objekt, ktery rika "ja ti neco vratim, ale az za chvilku"///
      key: "adresses",
      value: JSON.stringify(this._adresses)
    })
  }
}
