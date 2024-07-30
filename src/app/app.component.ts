import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
  PoTableModule,
  PoButtonModule,
  PoButtonGroupModule,
  PoButtonGroupItem,
  PoBreadcrumbModule,
  PoChartModule,
  PoChartSerie,
  PoModalModule,
  PoTableColumn,
  PoTableColumnLabel
} from '@po-ui/ng-components';
import { ApiService } from './ApiService';
import { PoChartSeriesPointComponent } from '@po-ui/ng-components/lib/components/po-chart/po-chart-container/po-chart-line/po-chart-series-point/po-chart-series-point.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    PoTableModule,
    HttpClientModule,
    PoButtonModule,
    PoButtonGroupModule,
    PoBreadcrumbModule,
    PoChartModule,
    PoModalModule

  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  menus: Array<PoMenuItem> = [
    { label: 'Go Home', action: this.onClick.bind(this), icon: 'po-icon po-icon-home', shortLabel: 'Home' },
    {
      label: 'Timekeeping',
      action: this.onClick.bind(this),
      icon: 'po-icon-clock',
      shortLabel: 'Timekeeping',
      badge: { value: 1 }
    },

  ];

  attendances: Array<PoButtonGroupItem> = [
    { label: 'Incluir Pedido', icon: 'po-icon po-icon-plus-circle', action: this.onClick.bind(this) },
    { label: 'Aprovar Pedido', icon: 'po-icon po-icon-ok', action: this.onClick.bind(this) },
    { label: 'Pedidos Aprovados', icon: 'po-icon po-icon-book', action: this.onClick.bind(this) },
  ];
  ngOnInit(): void {

  }

  onClick() {

  }

  coffeeProduction: Array<PoChartSerie> = [
    { label: 'Aprovados', data: 2796, tooltip: 'Aprovados', color: 'color-10' },
    { label: 'Aguardando Aprovação', data: 1076, tooltip: 'Aguardando Aprovação' },
  ];
  targetProperty = 'name';
  readonly items = [
    {
      component: {
        codigo: '1020120',
        favorite: ['favorite', 'documentation'],
        name: 'PO Select',
        description: 'Display a list of items and allows selection',
        link: '/documentation/po-select',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,

      }
    },
    {
      component: {
        codigo: '1020120',
        favorite: ['favorite', 'documentation'],
        name: 'FINISHED',
        description: 'Group of square buttons that allows multiple items to be selected',
        link: '/documentation/po-checkbox-group',
        extra: 'Best Practices',
        extras: ['Short and objective texts for items', 'Use with short lists', 'For big lists use PO Multiselect'],
        status: 0,

      }
    },
    {
      component: {
        codigo: '1020120',
        favorite: ['favorite', 'documentation'],
        name: 'PO Page Login',
        description: 'Template for authentication',
        link: '/documentation/po-page-login',
        extra: 'Features',
        extras: [],
        status: ''
      }
    },
    {
      component: {
        codigo: '1020120',
        favorite: ['favorite', 'documentation'],
        name: 'PO Number',
        description: 'Input that allows only numbers',
        link: '/documentation/po-number',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 1,

      }
    },
    {
      component: {
        codigo: '1020120',
        favorite: ['favorite', 'documentation'],
        name: 'PO Page Dynamic Table',
        description: 'Template for list resources with a table',
        link: '/documentation/po-page-dynamic-table',
        extra: 'Features',
        extras: ['6 defaults actions', 'Use Metadata to build your page', 'No code', 'Customization'],
        status: ''
      }
    },
    {
      component: {
        codigo: '1020120',
        favorite: ['favorite', 'documentation'],
        name: 'PO Combo',
        description: 'Display a list of items with filter and allows selection',
        link: '/documentation/po-combo',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,

      }
    },
    {
      component: {
        codigo: '1020120',
        favorite: ['favorite', 'documentation'],
        name: 'PO Notification',
        description: 'Show notification easily and quickly',
        link: '/documentation/po-notification',
        extra: 'Features',
        extras: ['4 types of notifications', 'Define time for your notifications', 'Use actions in your notification'],
        status: ''
      }
    },
    {
      component: {
        codigo: '1020120',
        favorite: ['favorite', 'documentation'],
        name: 'PO Multiselect',
        description: 'Display a list of items and allows multiple selection',
        link: '/documentation/po-multiselect',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 1,

      }
    },
    {
      component: {
        codigo: '1020120',
        favorite: ['favorite', 'documentation'],
        name: 'PO Grid',
        description: 'Create a grid for edition',
        link: '/documentation/po-grid',
        extra: 'Features',
        extras: [],
        status: 2,

      }
    },
    {
      component: {
        codigo: '1020120',
        favorite: ['favorite', 'documentation'],
        name: 'PO Input',
        description: 'Input for general texts',
        link: '/documentation/po-input',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,

      }
    },
    {
      component: {
        codigo: '1020120',
        favorite: ['favorite', 'documentation'],
        name: 'PO Textarea',
        description: 'Larger input for big texts',
        link: '/documentation/po-textarea',
        extra: 'Best Practices',
        extras: ['Recommended to large texts like observations and details', 'For short texts use po-input'],
        status: 1,

      }
    },
    {
      component: {
        codigo: '1020120',
        favorite: ['favorite', 'documentation'],
        name: 'PO Datepicker',
        description: 'Input with calendar for dates',
        link: '/documentation/po-datepicker',
        extra: 'Features',
        extras: [
          'Multiple idioms ( pt, es , en)',
          'Custom date formats',
          'Period validation (start date and end date)'
        ],
        status: 1,

      }
    },
    {
      component: {
        codigo: '1020120',
        favorite: ['favorite', 'documentation'],
        name: 'PO Email',
        description: 'Input that allows valid email texts (username@email.com)',
        link: '/documentation/po-email',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,

      }
    },
    {
      component: {
        codigo: '1020120',
        favorite: ['favorite', 'documentation'],
        name: 'PO Url',
        description: 'Input that expects a valid url as text (http://www.url.com)',
        link: '/documentation/po-url',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,

      }
    },
    {
      component: {
        codigo: '1020120',
        favorite: ['favorite', 'documentation'],
        name: 'PO Password',
        description: 'Input with bullet text to type passwords',
        link: '/documentation/po-password',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,

      }
    },
    {
      component: {
        codigo: '1020120',
        favorite: ['favorite', 'documentation'],
        name: 'PO Login',
        description: 'Input with a user icon that represents a login field',
        link: '/documentation/po-login',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,

      }
    },
    {
      component: {
        codigo: '1020120',
        favorite: ['favorite', 'documentation'],
        name: 'PO Upload',
        description: 'Upload file(s) with a loading bar',
        link: '/documentation/po-upload',
        extra: 'Features',
        extras: ['Multiple file selection', 'Automatic upload after click', 'File format and size restriction'],
        status: 1,

      }
    },
    {
      component: {
        codigo: '1020120',
        favorite: ['favorite', 'documentation'],
        name: 'PO Avatar',
        description: 'Creates a circle with a picture inside',
        link: '/documentation/po-avatar',
        extra: 'Features',
        extras: ['Multiple sizes', 'Default image'],
        status: 0,

      }
    }
  ];

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'component.codigo',
      label: 'Código',
      type: 'link'
    },
    {
      property: 'component.name',
      label: 'Nome',
      type: 'link'
    },
    { property: 'component.description', label: 'Motivo da Compra', color: this.onClick.bind(this) },
    {
      property: 'component.favorite',
      label: 'Actions',
      type: 'icon',
      sortable: false,
      color: 'color-09',
      icons: [
        {
          action: this.onClick.bind(this),
          color: this.onClick.bind(this),
          icon: 'po-icon po-icon-ok',
          tooltip: 'Aprovar',
          value: 'favorite',
        },
        {
          action: this.onClick.bind(this),
          disabled: this.onClick.bind(this),
          icon: 'po-icon po-icon-clear-content',
          tooltip: 'Rejeitar',
          value: 'documentation'
        }
      ]
    }
  ];
}