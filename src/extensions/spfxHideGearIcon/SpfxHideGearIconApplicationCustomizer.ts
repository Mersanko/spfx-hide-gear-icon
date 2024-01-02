import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
// import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'SpfxHideGearIconApplicationCustomizerStrings';
// import * as $ from 'jquery';

const LOG_SOURCE: string = 'SpfxHideGearIconApplicationCustomizer';
// import { SPPermission } from '@microsoft/sp-page-context';
require('../../customCss/hideGearIcon.css')

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISpfxHideGearIconApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SpfxHideGearIconApplicationCustomizer
  extends BaseApplicationCustomizer<ISpfxHideGearIconApplicationCustomizerProperties> {

  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }

    console.log('Hidding gear icon.')
    // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`).catch(() => {
    //   /* handle error */
    // });

    // Get the div element using the data-automation-id attribute




    return Promise.resolve();
  }
}
