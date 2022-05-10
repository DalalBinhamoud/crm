import { Component, OnInit } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'
import { BreakpointObserver } from '@angular/cdk/layout'

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  events: string[] = []
  isExpanded: boolean = true

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}

  toggle(nav: MatSidenav) {
    const isSmallScreen = this.breakpointObserver.isMatched(
      '(max-width: 599px)',
    )
    if (isSmallScreen) {
      nav.toggle()
    }
  }
}
