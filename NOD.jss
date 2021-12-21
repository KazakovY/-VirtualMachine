input 11
input 12

link condition
comp 11 12
jumpIfZero result
less Sub

sub 11 12 11
jump condition

link Sub
sub 12 11 12
jump condition

link result
output 11
exit
