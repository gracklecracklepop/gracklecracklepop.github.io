var searchedSpell;
var spellNameList = getColumn("DND SPELLS", "name");
//Classes
var spellClassList = getColumn("DND SPELLS", "classes");
var currentSpellClass;
//Schools
var spellSchoolList = getColumn("DND SPELLS", "school");
var currentSpellSchool;
//Cast Times
var spellCastTimeList = getColumn("DND SPELLS", "cast_time");
var currentSpellCastTime;
//Range
var spellRangeList = getColumn("DND SPELLS", "range");
var currentSpellRange;
//Duration
var spellDurationList = getColumn("DND SPELLS", "duration");
var currentSpellDuration;
//Description
var spellDescriptionList = getColumn("DND SPELLS", "description");
var currentSpellDescription;
//boolean
var foundBoolean;

onEvent("button1", "click", function( ) {
  foundBoolean = "true";
  searchedSpell = getText("spell_input");
  if (foundBoolean == "true") {
    for (var i = 0; i < spellNameList.length; i++) {
      if (searchedSpell == spellNameList[i]) {
        console.log("spell found at iteration " + i);
        currentSpellClass = spellClassList[i];
        currentSpellSchool = spellSchoolList[i];
        currentSpellCastTime = spellCastTimeList[i];
        currentSpellRange = spellRangeList[i];
        currentSpellDuration = spellDurationList[i];
        currentSpellDescription = spellDescriptionList[i];
      }
    }
  }
  setText("classes_input", currentSpellClass);
  setText("school_input", currentSpellSchool);
  setText("cast_time_input", currentSpellCastTime);
  setText("range_input", currentSpellRange);
  setText("duration_input", currentSpellDuration);
  setText("description_input", currentSpellDescription);
});
