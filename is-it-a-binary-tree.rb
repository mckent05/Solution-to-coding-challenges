class Node
	attr_reader :data
	attr_accessor :left, :right
	
	def initialize data
		@data = data
	end
end

def array_to_tree(array, index = 0)
	# use your function from the previous challenge
	if index >= array.length || array[index].zero?
		return nil
	end

	node = Node.new(array[index])
	node.left = array_to_tree(array, 2* index + 1)
	node.right = array_to_tree(array, 2* index + 2)
	node
end

def search_tree?(array)
	root = array_to_tree(array)
  # write your code here
  stack = []
  current = root
  previous= nil

  while !stack.empty? || current
	if current
		stack.push(current)
		current = current.left
		
	else
		current= stack.pop
		return false if previous && current.data < previous.data

		previous = current
		current = current.right
	end
  end
  true
end

puts search_tree?([10, 4, 12])
# => true

puts search_tree?([10, 5, 7])
# => false
