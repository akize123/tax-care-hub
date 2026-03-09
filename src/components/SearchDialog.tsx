import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

interface SearchItem {
  title: string;
  description: string;
  path: string;
  keywords: string[];
}

const SearchDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { t } = useLanguage();

  const searchItems: SearchItem[] = useMemo(() => [
    { title: t.nav.home, description: t.hero.title1 + " " + t.hero.title2, path: "/", keywords: ["home", "tax", "declaration", "imisoro"] },
    { title: t.nav.about, description: t.about?.title || "About Us", path: "/about", keywords: ["about", "story", "team", "mission"] },
    { title: t.nav.services, description: t.services?.title || "Our Services", path: "/services", keywords: ["services", "tax", "filing", "consultation", "bookkeeping"] },
    { title: t.nav.blogs, description: t.blogs?.title || "Blog", path: "/blogs", keywords: ["blog", "news", "articles", "updates"] },
    { title: t.nav.help, description: t.help?.title || "Help Center", path: "/help", keywords: ["help", "faq", "questions", "support"] },
    { title: t.nav.contact, description: t.contact?.title || "Contact Us", path: "/contact", keywords: ["contact", "email", "phone", "message"] },
  ], [t]);

  const filtered = useMemo(() => {
    if (!query.trim()) return searchItems;
    const q = query.toLowerCase();
    return searchItems.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.keywords.some(k => k.includes(q))
    );
  }, [query, searchItems]);

  const handleSelect = (path: string) => {
    navigate(path);
    onOpenChange(false);
    setQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden">
        <DialogTitle className="sr-only">Search</DialogTitle>
        <div className="flex items-center gap-3 px-4 border-b border-border">
          <Search size={18} className="text-muted-foreground shrink-0" />
          <Input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={t.nav.search || "Search pages & services..."}
            className="border-0 shadow-none focus-visible:ring-0 text-base py-4 h-auto"
            autoFocus
          />
        </div>
        <div className="max-h-72 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-8 text-sm">No results found.</p>
          ) : (
            filtered.map(item => (
              <button
                key={item.path}
                onClick={() => handleSelect(item.path)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg text-left hover:bg-accent/10 transition-colors group"
              >
                <div>
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground line-clamp-1">{item.description}</p>
                </div>
                <ArrowRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </button>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
