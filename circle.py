import math

class Circle:
  radius = 0

  def __init__(self,radius):
     self.radius = radius

  def validateDimension(self):
    try:
        self.width = float(self.radius)
    except ValueError:
        raise ValueError("Radius provided is valid")

  def area(self):
      return self.radius*self.radius*math.pi
