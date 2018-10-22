import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthService } from '../auth/auth.service';
import { MyNavComponent } from '../my-nav/my-nav.component';
import { Router } from '@angular/router';



@Component({
  selector: 'my-fishing-holes',
  templateUrl: './my-fishing-holes.component.html',
  styleUrls: ['./my-fishing-holes.component.css']
})
export class MyFishingHolesComponent implements OnInit {

  addFishingHoleForm = this.fb.group({
    river: null,
    nickName: null,
    accessRoad: null,
    city: null,
    state: null,
    geoCode: null,
    riverLevel: 'avg', 
    dateCreate: null, 
    timeCreate: null
  });

  states = [
    { name: 'Alabama', abbreviation: 'AL' },
    { name: 'Alaska', abbreviation: 'AK' },
    { name: 'American Samoa', abbreviation: 'AS' },
    { name: 'Arizona', abbreviation: 'AZ' },
    { name: 'Arkansas', abbreviation: 'AR' },
    { name: 'California', abbreviation: 'CA' },
    { name: 'Colorado', abbreviation: 'CO' },
    { name: 'Connecticut', abbreviation: 'CT' },
    { name: 'Delaware', abbreviation: 'DE' },
    { name: 'District Of Columbia', abbreviation: 'DC' },
    { name: 'Federated States Of Micronesia', abbreviation: 'FM' },
    { name: 'Florida', abbreviation: 'FL' },
    { name: 'Georgia', abbreviation: 'GA' },
    { name: 'Guam', abbreviation: 'GU' },
    { name: 'Hawaii', abbreviation: 'HI' },
    { name: 'Idaho', abbreviation: 'ID' },
    { name: 'Illinois', abbreviation: 'IL' },
    { name: 'Indiana', abbreviation: 'IN' },
    { name: 'Iowa', abbreviation: 'IA' },
    { name: 'Kansas', abbreviation: 'KS' },
    { name: 'Kentucky', abbreviation: 'KY' },
    { name: 'Louisiana', abbreviation: 'LA' },
    { name: 'Maine', abbreviation: 'ME' },
    { name: 'Marshall Islands', abbreviation: 'MH' },
    { name: 'Maryland', abbreviation: 'MD' },
    { name: 'Massachusetts', abbreviation: 'MA' },
    { name: 'Michigan', abbreviation: 'MI' },
    { name: 'Minnesota', abbreviation: 'MN' },
    { name: 'Mississippi', abbreviation: 'MS' },
    { name: 'Missouri', abbreviation: 'MO' },
    { name: 'Montana', abbreviation: 'MT' },
    { name: 'Nebraska', abbreviation: 'NE' },
    { name: 'Nevada', abbreviation: 'NV' },
    { name: 'New Hampshire', abbreviation: 'NH' },
    { name: 'New Jersey', abbreviation: 'NJ' },
    { name: 'New Mexico', abbreviation: 'NM' },
    { name: 'New York', abbreviation: 'NY' },
    { name: 'North Carolina', abbreviation: 'NC' },
    { name: 'North Dakota', abbreviation: 'ND' },
    { name: 'Northern Mariana Islands', abbreviation: 'MP' },
    { name: 'Ohio', abbreviation: 'OH' },
    { name: 'Oklahoma', abbreviation: 'OK' },
    { name: 'Oregon', abbreviation: 'OR' },
    { name: 'Palau', abbreviation: 'PW' },
    { name: 'Pennsylvania', abbreviation: 'PA' },
    { name: 'Puerto Rico', abbreviation: 'PR' },
    { name: 'Rhode Island', abbreviation: 'RI' },
    { name: 'South Carolina', abbreviation: 'SC' },
    { name: 'South Dakota', abbreviation: 'SD' },
    { name: 'Tennessee', abbreviation: 'TN' },
    { name: 'Texas', abbreviation: 'TX' },
    { name: 'Utah', abbreviation: 'UT' },
    { name: 'Vermont', abbreviation: 'VT' },
    { name: 'Virgin Islands', abbreviation: 'VI' },
    { name: 'Virginia', abbreviation: 'VA' },
    { name: 'Washington', abbreviation: 'WA' },
    { name: 'West Virginia', abbreviation: 'WV' },
    { name: 'Wisconsin', abbreviation: 'WI' },
    { name: 'Wyoming', abbreviation: 'WY' }
  ];

  submitted: boolean = false;

  newFishingHole: any = {};

  myFishingHoles: any[] = [];

  isEdit: boolean = false;
  isLocated: boolean = false;

  myForm = document.getElementById('addHoleForm');

  
  

  addFishingHole() {
    this.isEdit = !this.isEdit;
  }

  constructor(private fb: FormBuilder, private db: AngularFirestore, private auth: AuthService, private mynav: MyNavComponent, private router: Router) {}

  addHoleToFirestore(newHole) {
    const newDocRef: AngularFirestoreDocument<any> = this.db.doc(`my-fishing-holes/${newHole.nickName}`);
      newDocRef.set(newHole, { merge: true })
        newHole = {}
        console.log('Firestore Add New Fishing Hole = SUCCESS');
      
  }

  ngOnInit() {
  }

  onSubmit() {
    let submitDateTime = this.mynav.getCurrentTime();
    this.newFishingHole.dateCreate = submitDateTime[0];
    this.newFishingHole.timeCreate = submitDateTime[1];
    console.log(this.newFishingHole);
    this.addHoleToFirestore(this.newFishingHole);
    this.submitted = true;
    this.isEdit = !this.isEdit;
    alert('New Fishing Hole ' + '"' + this.newFishingHole.nickName + '"' + ' Added!');
    this.newFishingHole = {};
    // location.reload(true); 
    // this.myFishingHoles.push(this.newFishingHole);
    // console.log(this.myFishingHoles);
    // document.body.appendChild(this.myForm);
    
    



  }

  closeForm() {
    this.isEdit = !this.isEdit;
  }

  geoField = document.getElementById("geoCode");

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position) {
    let coords = '';
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    // this.geoField.innerHTML = position.coords.latitude + ',' + position.coords.longitude;
    // this.geoField.innerHTML = "'" + position.coords.latitude + "'," + "'" + position.coords.longitude + "'"
    coords = position.coords.latitude + ',' + position.coords.longitude;
    // alert(coords);
    
    // let img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + coords + "&zoom=14&size=400x300&sensor=false&key=AIzaSyBUZZuzr55rK1eyi8bnolLd3sYIytszpfk&signature=HWaHmIHC86aduDHlG138Vio4Zlk=";
    // document.getElementById('mapholder').innerHTML = "<img src='" + img_url + "'>";
    // this.newFishingHole.geoCode = coords;
  }

  showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied geolocation request.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information currently unavailable.")
        break;
      case error.TIMEOUT:
        alert("The geo Location request timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
    }
  }

}


// Google Maps API KEY
// AIzaSyBUZZuzr55rK1eyi8bnolLd3sYIytszpfk
//