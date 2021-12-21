input 201
input 202

link condition
comp 201 202
jumpIfZero result
less Sub

sub 201 202 201
jump condition

link Sub
sub 202 201 202
jump condition

link result
output 201
exit
