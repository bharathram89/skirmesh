import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { subscribeOn } from 'rxjs/operators';
import { UserServiceService } from 'src/service/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  pfNav: HTMLElement;
  securityNav: HTMLElement;
  settingsNav: HTMLElement;
  pfSection: HTMLElement;
  securitySection: HTMLElement;
  settingsSection: HTMLElement;

  profileForm: FormGroup;
  fields = { fname: '', lname: '', email: '', clanTag: '', phone: '', bio: '' }

  isField: boolean;
  isPlayer: boolean;

  currentVals = {
    fName: "",
    lName: "",
    clanTag: "",
    email: "",
    phone: "",
    bio: ''
  }


  userSvc: UserServiceService;



  constructor(private userService: UserServiceService) {
    this.userSvc = userService;
  }

  ngOnInit(): void {
    this.pfNav = document.getElementById('profileNav');
    this.securityNav = document.getElementById('securityNav');
    this.settingsNav = document.getElementById('settingsNav');
    this.pfSection = document.getElementById('profile');
    this.securitySection = document.getElementById('security');
    this.settingsSection = document.getElementById('settings');
    this.pfSection.style.display = 'block';
    this.isPlayer = this.userSvc.isPlayer;
    this.isField = this.userSvc.isField;


    this.profileForm = new FormGroup({

      "fname": new FormControl(this.fields.fname, [
        Validators.required
      ]),
      "lname": new FormControl(this.fields.lname, [
        Validators.required
      ]),
      "email": new FormControl(this.fields.email, [
        Validators.required,
        Validators.email
      ]),
      "clanTag": new FormControl(this.fields.clanTag, [
      ]),
      "phone": new FormControl(this.fields.phone, [
      ]),
      "bio": new FormControl(this.fields.bio, [
      ])
    })


    this.userSvc.getUserData().subscribe(
      userData => {
        this.currentVals.fName = userData.firstName ? userData.firstName : 'Please Enter First Name';
        this.currentVals.lName = userData.lastName ? userData.lastName : 'Please Enter Last Name';
        this.currentVals.clanTag = userData.clanTag ? userData.playerProfile.clanTag : 'Declare your Clan!';
        this.currentVals.email = userData.email ? userData.email : 'Please Enter Email';
        this.currentVals.phone = userData.phoneNumber ? userData.phoneNumber : 'Please Enter Phone Number';
        this.currentVals.bio = userData.phoneNumber ? userData.playerProfile.outfit : 'Tell us about you loadout!';
      }
    )
  }


  profile() {
    this.pfNav.classList.add('active')
    this.securityNav.classList.remove('active')
    this.settingsNav.classList.remove('active')
    this.pfSection.style.display = 'block';
    this.securitySection.style.display = 'none';
    this.settingsSection.style.display = 'none';
  }
  settings() {
    this.pfNav.classList.remove('active')
    this.securityNav.classList.remove('active')
    this.settingsNav.classList.add('active')
    this.pfSection.style.display = 'none';
    this.securitySection.style.display = 'none';
    this.settingsSection.style.display = 'block';
  }
  security() {
    this.pfNav.classList.remove('active')
    this.securityNav.classList.add('active')
    this.settingsNav.classList.remove('active')
    this.pfSection.style.display = 'none';
    this.securitySection.style.display = 'block';
    this.settingsSection.style.display = 'none';
  }

  onSubmit(){
    
  }


}
