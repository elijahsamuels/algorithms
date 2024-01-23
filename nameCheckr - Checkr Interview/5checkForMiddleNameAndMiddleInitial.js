// 5. Middle name and middle initials match

// Known aliases
//   Alphonse Gabriel Capone
//   Alphonse F Capone

// Name returned on record
//   Alphonse G Capone (positive)
//   Alphonse Francis Capone (positive)
//   Alphonse E Capone (negative)

function checkForMiddleNameAndMiddleInitial(record) {
  // Check for middle name
  if (record.middle_name) {
    // Check for middle initials
    if (record.middle_initials) {
      // Check for match
      if (record.middle_name.toLowerCase() == record.middle_initials.toLowerCase()) {
        return true;
      }
    }
  }
  return false;
}