Adding a new Entity:

1): The pattern to use is that the entity class inherits from a Non-bindable entity . e.g. ThoughtBindable -> Thought
This is a DRY way of preventing mass-assignment attacks. 