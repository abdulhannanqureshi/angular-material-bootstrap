import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { FullHeaderComponent } from './full-header/full-header.component';
import { BannerComponent } from './banner/banner.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { OwlModule } from 'ngx-owl-carousel';
import { AccordianComponent } from './core/accordian/accordian.component';
import { ButtonComponent } from './core/button/button.component';
import { FormsModule } from '@angular/forms';
import { CollapseComponent } from './core/collapse/collapse.component';
import { DatepickerComponent } from './core/datepicker/datepicker.component';
import { DropdownComponent } from './core/dropdown/dropdown.component';
import { ModelComponent } from './core/model/model.component';
import { PaginationComponent } from './core/pagination/pagination.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PopoverComponent } from './core/popover/popover.component';
import { ProgressbarComponent } from './core/progressbar/progressbar.component';
import { RatingComponent } from './core/rating/rating.component';
import { TableComponent } from './core/table/table.component';
import { DataTableModule } from 'angular-6-datatable';
import { DataTablesModule } from 'angular-datatables';
import { TabsComponent } from './core/tabs/tabs.component';
import { TimepickerComponent } from './core/timepicker/timepicker.component';
import { TooltipComponent } from './core/tooltip/tooltip.component';
import { FilterTypeheadComponent } from './core/filter-typehead/filter-typehead.component';
import { MaterialDesignComponent } from './material-design/material-design.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteComponent } from './material/autocomplete/autocomplete.component';
import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CheckboxComponent } from './material/checkbox/checkbox.component';
import { MdatepickeComponent } from './material/mdatepicke/mdatepicke.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { FormfieldComponent } from './material/formfield/formfield.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from './material/input/input.component';
import { RadioComponent } from './material/radio/radio.component';
import { SelectComponent } from './material/select/select.component';
import { RangeSliderComponent } from './material/range-slider/range-slider.component';
import { MatSliderModule } from '@angular/material/slider';
import { SlideToggleComponent } from './material/slide-toggle/slide-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MenuComponent } from './material/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { SlideNavComponent } from './material/slide-nav/slide-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoadderComponent } from './loadder/loadder.component';
import { FormComponent } from './core/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainHeaderComponent,
    FullHeaderComponent,
    BannerComponent,
    AccordianComponent,
    ButtonComponent,
    CollapseComponent,
    DatepickerComponent,
    DropdownComponent,
    ModelComponent,
    PaginationComponent,
    HomeComponent,
    AboutComponent,
    PopoverComponent,
    ProgressbarComponent,
    RatingComponent,
    TableComponent,
    TabsComponent,
    TimepickerComponent,
    TooltipComponent,
    FilterTypeheadComponent,
    MaterialDesignComponent,
    AutocompleteComponent,
    CheckboxComponent,
    MdatepickeComponent,
    FormfieldComponent,
    InputComponent,
    RadioComponent,
    SelectComponent,
    RangeSliderComponent,
    SlideToggleComponent,
    MenuComponent,
    SlideNavComponent,
    LoadderComponent,
    FormComponent
    ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    NgbModule,
    SlideshowModule,
    OwlModule,
    FormsModule, //important for ngb button
    DataTableModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
