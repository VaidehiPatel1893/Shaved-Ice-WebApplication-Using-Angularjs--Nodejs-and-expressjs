import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { TitleComponent } from './title/title.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { FoodFormComponent } from './food-form/food-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    TagsComponent,
    NotFoundComponent,
    HomeComponent,
    CartPageComponent,
    FoodPageComponent,
    TitleComponent,
    MenuComponent,
    SignupComponent,
    FoodFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
