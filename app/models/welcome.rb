class Welcome < ActiveRecord::Base

  def self.setName
    return "My name is Roel Cantu Jr."
  end

  def self.setArray
    elements = ['Roel', 'Inez', 'Roel Jr.', 'Brandon']
    elements.each do |element|
      puts element
    end
  end

  def self.setNumbers
    numbers = [1, 2, 3, 4, 5]
    numbers.each do |number|
      puts number
    end
  end
end
