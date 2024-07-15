import {Component} from '@angular/core'

@Component({
    selector: 'app-header',
    standalone: true, //true for standalone, false for module-based components(old)
    templateUrl:'./header.component.html',
    styleUrl: './header.component.css'
})


export class HeaderComponent {}