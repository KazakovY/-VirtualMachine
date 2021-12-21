input 210

set 202 1
set 203 1
set 201 1
set 200 0

comp 200 210
jumpIfZero result

link condition
comp 210 202
jumpIfZero result

add 201 202 202
mul 203 202 203
jump condition

link result
output 203
exit
