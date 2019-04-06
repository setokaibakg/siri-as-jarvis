// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: light-gray; icon-glyph: robot;
let output = "I was unsure what to do exactly."
let SiriArg = args.siriShortcutArguments
let ifttt = importModule('lib/ifttt')
//Setup with IFTTT Key
ifttt.setup('#######');

if (typeof SiriArg.event !== typeof undefined){
    //Call Get command and return back TRUE/FALSE
    //I will [turn_on_the_lamp]
    //I will [turn_off_the_lamp]
    //I will [clean_the_kitchen]
    //I will [clean_the_entryway]
    //I will [clean_the_livingroom]
    //I will [clean_the_bathroom]
    //I will [clean_the_bedroom]
    //I will [turn_on_the_homepod]
    //I will [turn_off_the_homepod]
    //I will [turn_off_the_hue_lights]
    //I will [turn_off_the_flatiron]
    //I will [turn_off_the_mop]
    //I will [charge_the_mop]
    output = await ifttt.GET(SiriArg.event) == true ? "I will " + SiriArg.event.replace(/_/g, ' ') +" ." : "There was a problem performing that action.";
    //Example of a POST webhooks to notification
    //                  event ,    Value1       ,       Value 2               ,      Value3
    //await ifttt.POST("alert", "Title of Alert", "Message of what's going on", "http://www.google.com");
} 

if (config.runsWithSiri) {
  await Speech.speak(output)
} else {
    QuickLook.present(output)
}
