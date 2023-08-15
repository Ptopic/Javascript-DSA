// Quick Sort
/*
Example:

[5,2,1,8,4,7,6,3]
 p      

          5 -> 5 is in corret spot
 3,2,1,4        7,6,8
 p              p 
      3           7
  1,2   4       6   8
  p             
      3         
  1     4       
    2
  1,2,3,4
*/

// Pivot helper function (Partition)

/* Rearange elements in array so that 
all values less than the pivot are moved to the left of the pivot and the 
values grater than the pivot are moved to the right of the pivot 

it should not create a new array

it return the index of the pivot

pivot should always be the first element
*/