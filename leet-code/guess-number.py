import time
WARNING = '\033[93m'
ENDC = '\033[0m'

inputNum = 1
target = 1

# a always bigger then b
def halfDiff(a, b):
    if (a < b):
        print WARNING+"a smaller then b"+ENDC
        raise ValueError
    return (a - b) / 2

def guess(n):
    if n > target:
        return -1
    elif n < target:
        return 1
    elif n == target:
        return 0

class Solution(object):
    def guessNumber(self, n):
        """
        :type n: int
        :rtype: int
        """
        preN = n
        newN = 0
        gOut = guess(n)

        if gOut == 0:
            return n

        # phase 1 find util guess over and less
        gOutStart = gOut
        while(gOutStart == gOut):
            if gOut == 1:
                preN = n
                n = n * 2
                gOut = guess(n)
            elif gOut == -1:
                preN = n
                n = n / 2
                gOut = guess(n)

        if gOut == 0:
            return preN

        # phase 2 
        while gOut != 0:
            if n > preN:
                newNum = n - halfDiff(n, preN)
                gOut = guess(n)
                if gOut == 1:
                    preN = newNum
                elif gOut == -1:
                    n = newNum

            elif n < preN:
                newNum = preN - halfDiff(preN, n)
                print preN, n
                gOut = guess(newNum)

                if gOut == 1:
                    n = newNum
                elif gOut == -1:
                    preN = newNum

            print gOut
        return newNum

tmp = Solution()
print tmp.guessNumber(inputNum);










"""

// https://leetcode.com/problems/guess-number-higher-or-lower/

/*
374. Guess Number Higher or Lower
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I'll tell you whether the number is higher or lower.

You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):

    -1 : My number is lower
     1 : My number is higher
     0 : Congrats! You got it!

Example:
    n = 10, I pick 6.

    Return 6.
*/

// # The guess API is already defined for you.
// # @param num, your guess
// # @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
// # def guess(num):
//
"""
