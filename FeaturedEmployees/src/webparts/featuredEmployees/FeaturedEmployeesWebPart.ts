import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import type { IReadonlyTheme } from '@microsoft/sp-component-base';

import styles from './FeaturedEmployeesWebPart.module.scss';
import * as strings from 'FeaturedEmployeesWebPartStrings';
require("./customw3.css");

export interface IFeaturedEmployeesWebPartProps {
  description: string;
}

export default class FeaturedEmployeesWebPart extends BaseClientSideWebPart<IFeaturedEmployeesWebPartProps> {

  //private _environmentMessage: string = '';
//https://www.w3schools.com/w3images/team2.jpg
  public render(): void {
    this.domElement.innerHTML = `
    <section class="${styles.featuredEmployees} ${!!this.context.sdks.microsoftTeams ? styles.teams : ''}">
      <div class="w3-container w3-padding-32" id="about">
            <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>

        <div class="w3-row-padding w3-grayscale">
            <div class="w3-col l3 m6 w3-margin-bottom">
                <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John" style="width:100%">
                <h3>John Doe</h3>
                <p class="w3-opacity">CEO & Founder</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
                <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane" style="width:100%">
                <h3>Jane Doe</h3>
                <p class="w3-opacity">Architect</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
                <img src="https://www.w3schools.com/w3images/team3.jpg" alt="Mike" style="width:100%">
                <h3>Mike Ross</h3>
                <p class="w3-opacity">Architect</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
                <img src="https://www.w3schools.com/w3images/team4.jpg" alt="Dan" style="width:100%">
                <h3>Dan Star</h3>
                <p class="w3-opacity">Architect</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
                <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John" style="width:100%">
                <h3>John Doe</h3>
                <p class="w3-opacity">CEO & Founder</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
                <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane" style="width:100%">
                <h3>Jane Doe</h3>
                <p class="w3-opacity">Architect</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
                <img src="https://www.w3schools.com/w3images/team3.jpg" alt="Mike" style="width:100%">
                <h3>Mike Ross</h3>
                <p class="w3-opacity">Architect</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
                <img src="https://www.w3schools.com/w3images/team4.jpg" alt="Dan" style="width:100%">
                <h3>Dan Star</h3>
                <p class="w3-opacity">Architect</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
        </div>   
    </section>`;
  }

  // protected onInit(): Promise<void> {
  //   return this._getEnvironmentMessage().then(message => {
  //     this._environmentMessage = message;
  //   });
  // }


  

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
