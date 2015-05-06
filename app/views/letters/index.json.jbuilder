json.array!(@letters) do |letter|
  json.extract! letter, :id, :first_image, :second_image
  json.url letter_url(letter, format: :json)
end
