from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Note
from .serializers import NoteSerializer

@api_view(['GET'])
def get_all(request):
  notes = Note.objects.all()
  serializer = NoteSerializer(notes, many=True)
  return Response(serializer.data)

@api_view(['GET'])
def get_note(request, pk):
  data = request.data
  note = Note.objects.get(id=pk)
  serializer = NoteSerializer(note, many=False)
  return Response(serializer.data)

@api_view(['POST'])
def create_note(request):
  data = request.data
  note = Note.objects.create(
    title = data['title'],
    color = data['color'],
    body = data['body'],
  )
  serializer = NoteSerializer(note, many=False)
  return Response(serializer.data)

@api_view(['PATCH'])
def update_note(request, pk):
  data = request.data
  note = Note.objects.get(id=pk)
  serializer = NoteSerializer(note, data=data, partial=True)

  if serializer.is_valid():
    serializer.save()
  else: print('invalid')

  return Response(serializer.data)

# @api_view(['PUT'])
# def update_note(request, pk):
#   data = request.data
#   note = Note.objects.get(id=pk)
#   serializer = NoteSerializer(instance=note, data=data)

#   if serializer.is_valid():
#       serializer.save()

#   return Response(serializer.data)

@api_view(['DELETE'])
def delete_note(request, pk):
  note = Note.objects.get(id=pk)
  note.delete()
  return Response('Note deleted.')
