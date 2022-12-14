class Solution(object):
  def isPalindrome(self, x):
    """
    :type x: int
    :rtype: bool
    """
    if x < 0 or (x % 10 == 0 and x != 0):
        return False

    revertedNumber = 0
    while x > revertedNumber:
        revertedNumber = revertedNumber * 10 + x % 10
        x /= 10

    return x == revertedNumber or x == revertedNumber / 10

# Testcase
if __name__ == '__main__':
  print(Solution.isPalindrome(121))
  print(Solution.isPalindrome(-121))
  print(Solution.isPalindrome(10))
  print(Solution.isPalindrome(11))
