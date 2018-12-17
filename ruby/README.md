# sorts in ruby
Sorting algorithms in ruby

All algorithms are implemented as [refinement](http://ruby-doc.org/core-2.3.1/doc/syntax/refinements_rdoc.html)
of [Array#sort](https://ruby-doc.org/core-2.3.1/Array.html#method-i-sort) and
[Array#sort!](https://ruby-doc.org/core-2.3.1/Array.html#method-i-sort-21).

Current implementation assumes elements as numbers & uses '<' operator for
comparison.

## Setup
Setup bundler binstubs for easy command-line usage:
```bash
$ chmod +x $rvm_path/hooks/after_cd_bundler
$ bundle install -—binstubs
```

For more information read [this](https://robots.thoughtbot.com/use-bundlers-binstubs).
## Run tests
```bash
$ rspec
```
## TODO
#### Use `<=>` for comparison
#### Implement refinements for:
* `sort { |a, b| block } -> new_ary`
* `sort! { |a, b| block } -> ary`
* `sort_by! { |obj| block } -> ary`
* `sort_by! -> Enumerator`
