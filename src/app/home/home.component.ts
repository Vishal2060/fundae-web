import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const treeviewMenu = $('.app-menu');

    // Toggle Sidebar
    $('[data-toggle="sidebar"]').click(function (event) {
      event.preventDefault();
      $('.app').toggleClass('sidenav-toggled');
    });

    // Activate sidebar treelike toggle
    $('[data-toggle=\'treeview\']').click(function (event) {
      event.preventDefault();
      if (!$(this).parent().hasClass('is-expanded')) {
        treeviewMenu.find('[data-toggle=\'treeview\']').parent().removeClass('is-expanded');
      }
      $(this).parent().toggleClass('is-expanded');
    });

    // Set initial active toggle
    $('[data-toggle=\'treeview.\'].is-expanded').parent().toggleClass('is-expanded');

    // Activate bootstrap tooltips
    $('[data-toggle=\'tooltip\']').tooltip();

  }


}
