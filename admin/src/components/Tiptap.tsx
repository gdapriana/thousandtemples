import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {Bold, Heading1, Heading2, Heading3, List, ListOrdered} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {Dispatch, SetStateAction} from "react";

const extensions = [
  StarterKit,
]


const Tiptap = ({ setBody, body } : { setBody: Dispatch<SetStateAction<string | null | undefined >>, body?: string}) => {
  const content = !body ? '<p>Body here...</p>' : body;
  const editor = useEditor({
    extensions,
    content,
    onUpdate: () => {
      setBody(editor?.getHTML());
    },
    onCreate: () => {
      if (body) setBody(body);
    },
  })

  return (
    <div className="border rounded-lg h-[300px] flex flex-col justify-start items-stretch">
      <div className="flex border-b p-2 justify-start items-center">
        <Button size="sm" variant={editor?.isActive('bold') ? 'secondary' : 'ghost'} onClick={() => {editor?.chain().focus().toggleBold().run()}} type="button" >
          <Bold className="w-4 h-4" />
        </Button>
        <Button size="sm" variant={editor?.isActive('heading', { level: 1 }) ? 'secondary' : 'ghost'} onClick={() => {editor?.chain().focus().toggleHeading({ level: 1 }).run()}} type="button" >
          <Heading1 className="w-4 h-4" />
        </Button>
        <Button size="sm" variant={editor?.isActive('heading', { level: 2 }) ? 'secondary' : 'ghost'} onClick={() => {editor?.chain().focus().toggleHeading({ level: 2 }).run()}} type="button" >
          <Heading2 className="w-4 h-4" />
        </Button>
        <Button size="sm" variant={editor?.isActive('heading', { level: 3 }) ? 'secondary' : 'ghost'} onClick={() => {editor?.chain().focus().toggleHeading({ level: 3 }).run()}} type="button" >
          <Heading3 className="w-4 h-4" />
        </Button>
        <Button size="sm" variant={editor?.isActive('bulletList') ? 'secondary' : 'ghost'} onClick={() => {editor?.chain().focus().toggleBulletList().run()}} type="button" >
          <List className="w-4 h-4" />
        </Button>
        <Button size="sm" variant={editor?.isActive('orderedList') ? 'secondary' : 'ghost'} onClick={() => {editor?.chain().focus().toggleOrderedList().run()}} type="button" >
          <ListOrdered className="w-4 h-4" />
        </Button>
      </div>
      <EditorContent className="p-2 flex-1 basis-0 overflow-auto prose-sm prose-stone" editor={editor} />
    </div>
  )
}

export default Tiptap