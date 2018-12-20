# https://rcode5.wordpress.com/2013/06/07/custom-rspec-matchers-for-arrays/

RSpec::Matchers.define :be_ordered do |order = :ascending|
  comparator = proc { |x, y| x <=> y } if order == :ascending
  comparator = proc { |x, y| y <=> x } if order == :descending

  match do |actual|
    derivative = actual.each_cons(2).map { |x, y| comparator.call(x, y) }
    derivative.all? { |v| v <= 0 }
  end

  failure_message do |actual|
    "expected array #{actual.inspect} to be in #{order} order"
  end

  failure_message_when_negated do |actual|
    "expected array #{actual.inspect} to not be in #{order} order"
  end

  description do
    "be ordered"
  end
end
