/*   Cases (we should provide positive and negative examples for each):

  1. Exact match

    Known aliases
      Alphonse Gabriel Capone
      Al Capone

    Name returned on record
      Alphonse Gabriel Capone (positive)
      Al Capone (positive)
      Alphonse Francis Capone (negative)




      
  2. Middle name unknown match (alias list)

    Known aliases
      Alphonse Capone

    Name returned on record
      Alphonse Gabriel Capone (positive)
      Alexander Capone (negative)




  3. Middle name unknown match (criminal record)

    Known aliases
      Alphonse Gabriel Capone

    Name returned on record
      Alphonse Capone (positive)






  4. Multiple middle name aliases

    Known aliases
      Alphonse Gabriel Capone
      Alphonse Francis Capone

    Name returned on record
      Alphonse Gabriel Capone (positive)
      Alphonse Francis Capone (positive)
      Alphonse Edward Capone (negative)














  5. Middle name and middle initials match

    Known aliases
      Alphonse Gabriel Capone
      Alphonse F Capone

    Name returned on record
      Alphonse G Capone (positive)
      Alphonse Francis Capone (positive)
      Alphonse E Capone (negative)










  6. Name transposition

    Known aliases
      Alphonse Gabriel Capone

    Name returned on record
      Gabriel Alphonse Capone (positive)
      Gabriel Capone (positive)
      Capone Francis Alphonse (negative)






  7. Misspellings (threshold: Damerau–Levenshtein distance 1)

    Known aliases
      Alphonse Capone

    Name returned on record
      Alphonce Capone (positive)
      Alphosne Capone (positive)
      Alfonse Capone (negative)







  8. Nickname match (Optional)

    Known aliases
      Alphonse Capone

    Name returned on record
      Al Capone (positive)
      Albert Capone (negative)

    Known aliases
      Theodore Kaczynski

    Name returned on record
      Ted Kaczynski (positive)
      Teddy Kaczynski (positive)
      Tommy Kaczynski (negative) 
*/
