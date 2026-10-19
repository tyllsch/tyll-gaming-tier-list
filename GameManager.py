import tkinter as tk
from tkinter import ttk, filedialog, messagebox
import os
import shutil
import re

# --- CONFIGURATION ---
# Ensure these match your actual folder structure relative to this script
COVER_PATH = os.path.join("img", "cover")
SUM_PATH = os.path.join("img", "sum")
JS_FILE_PATH = os.path.join("src", "gameSetup.js")

class GameAdderApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Tyll's Tier List Manager")
        self.root.geometry("600x850")
        
        # Styles
        style = ttk.Style()
        style.theme_use('clam')
        
        # --- UI ELEMENTS ---
        main_frame = ttk.Frame(root, padding="20")
        main_frame.pack(fill=tk.BOTH, expand=True)

        # Title
        ttk.Label(main_frame, text="Game Title:").grid(row=0, column=0, sticky="w", pady=5)
        self.entry_title = ttk.Entry(main_frame, width=40)
        self.entry_title.grid(row=0, column=1, sticky="w", pady=5)
        self.entry_title.bind("<KeyRelease>", self.update_filenames)

        # Year
        ttk.Label(main_frame, text="Year:").grid(row=1, column=0, sticky="w", pady=5)
        self.combo_year = ttk.Combobox(main_frame, values=["2024", "2025", "2026", "2027"], width=37)
        self.combo_year.current(2) # Default to 2026
        self.combo_year.grid(row=1, column=1, sticky="w", pady=5)

        # Tier
        ttk.Label(main_frame, text="Tier:").grid(row=2, column=0, sticky="w", pady=5)
        self.combo_tier = ttk.Combobox(main_frame, values=["S", "A", "B", "C", "D", "F", "DNF"], width=37)
        self.combo_tier.set("B")
        self.combo_tier.grid(row=2, column=1, sticky="w", pady=5)
        
        # Tier Score
        ttk.Label(main_frame, text="Tier Score (e.g. 85):").grid(row=3, column=0, sticky="w", pady=5)
        self.entry_tierscore = ttk.Entry(main_frame, width=40)
        self.entry_tierscore.grid(row=3, column=1, sticky="w", pady=5)

        # Playtime
        ttk.Label(main_frame, text="Playtime Hours (e.g. 101.5):").grid(row=4, column=0, sticky="w", pady=5)
        self.entry_time = ttk.Entry(main_frame, width=40)
        self.entry_time.grid(row=4, column=1, sticky="w", pady=5)

        # Achievements
        ttk.Label(main_frame, text="Achievements (e.g. 62/63):").grid(row=5, column=0, sticky="w", pady=5)
        self.entry_achievements = ttk.Entry(main_frame, width=40)
        self.entry_achievements.grid(row=5, column=1, sticky="w", pady=5)
        
        # Categories
        ttk.Label(main_frame, text="Categories (comma separated):").grid(row=6, column=0, sticky="w", pady=5)
        self.entry_categories = ttk.Entry(main_frame, width=40)
        self.entry_categories.grid(row=6, column=1, sticky="w", pady=5)

        # Images
        ttk.Separator(main_frame, orient='horizontal').grid(row=7, column=0, columnspan=2, sticky="ew", pady=15)
        
        self.cover_path_var = tk.StringVar()
        self.sum_path_var = tk.StringVar()

        ttk.Button(main_frame, text="Select Cover Image (Small)", command=self.select_cover).grid(row=8, column=0, sticky="w", pady=5)
        self.lbl_cover = ttk.Label(main_frame, text="No file selected", foreground="gray")
        self.lbl_cover.grid(row=8, column=1, sticky="w")

        ttk.Button(main_frame, text="Select Summary Image (Big)", command=self.select_sum).grid(row=9, column=0, sticky="w", pady=5)
        self.lbl_sum = ttk.Label(main_frame, text="No file selected", foreground="gray")
        self.lbl_sum.grid(row=9, column=1, sticky="w")
        
        # Generated Filename Preview
        ttk.Label(main_frame, text="Will be saved as:").grid(row=10, column=0, sticky="w", pady=5)
        self.lbl_filename_preview = ttk.Label(main_frame, text="...", font=("Courier", 10))
        self.lbl_filename_preview.grid(row=10, column=1, sticky="w")

        # Summary Text
        ttk.Separator(main_frame, orient='horizontal').grid(row=11, column=0, columnspan=2, sticky="ew", pady=15)
        ttk.Label(main_frame, text="Review / Description:").grid(row=12, column=0, sticky="nw", pady=5)
        self.text_summary = tk.Text(main_frame, height=10, width=50)
        self.text_summary.grid(row=12, column=1, sticky="w", pady=5)
        
        # Submit
        ttk.Button(main_frame, text="ADD GAME TO WEBSITE", command=self.process_game).grid(row=13, column=0, columnspan=2, pady=20, ipadx=20, ipady=10)

    def update_filenames(self, event=None):
        title = self.entry_title.get()
        # Create a safe filename: lowercase, remove special chars
        clean_name = re.sub(r'[^a-zA-Z0-9]', '', title).lower()
        if clean_name:
            self.lbl_filename_preview.config(text=f"{clean_name}.jpg")
            self.clean_filename = clean_name
        else:
            self.lbl_filename_preview.config(text="...")
            self.clean_filename = ""

    def select_cover(self):
        filename = filedialog.askopenfilename(title="Select Cover Image", filetypes=[("Images", "*.jpg *.jpeg *.png *.webp")])
        if filename:
            self.cover_path_var.set(filename)
            self.lbl_cover.config(text=os.path.basename(filename))

    def select_sum(self):
        filename = filedialog.askopenfilename(title="Select Summary Background", filetypes=[("Images", "*.jpg *.jpeg *.png *.webp")])
        if filename:
            self.sum_path_var.set(filename)
            self.lbl_sum.config(text=os.path.basename(filename))

    def process_game(self):
        # 1. Validation
        if not self.entry_title.get() or not self.clean_filename:
            messagebox.showerror("Error", "Please enter a Game Title")
            return
        
        # 2. Prepare Data
        title = self.entry_title.get()
        # Convert newlines to <br> tags
        raw_summary = self.text_summary.get("1.0", tk.END).strip()
        summary_html = raw_summary.replace("\n", "<br>")
        
        year = self.combo_year.get()
        tier = self.combo_tier.get()
        
        # Ensure numbers fallback cleanly if left empty
        tier_score = self.entry_tierscore.get().strip() or "0"
        playtime = self.entry_time.get().strip() or "0"
        achievements = self.entry_achievements.get().strip()
        
        # Parse categories into a formatted JS array string
        raw_categories = self.entry_categories.get()
        category_list = [c.strip() for c in raw_categories.split(',')] if raw_categories else []
        formatted_categories = ", ".join([f"'{c}'" for c in category_list if c])

        # 3. Handle Images
        cover_src = self.cover_path_var.get()
        sum_src = self.sum_path_var.get()
        
        cover_filename = ""
        sum_filename = ""

        if cover_src:
            ext = os.path.splitext(cover_src)[1]
            cover_filename = f"{self.clean_filename}{ext}"
            target = os.path.join(COVER_PATH, cover_filename)
            try:
                os.makedirs(COVER_PATH, exist_ok=True)
                shutil.copy(cover_src, target)
            except Exception as e:
                messagebox.showerror("Error", f"Failed to copy cover image: {e}")
                return

        if sum_src:
            ext = os.path.splitext(sum_src)[1]
            sum_filename = f"{self.clean_filename}{ext}"
            target = os.path.join(SUM_PATH, sum_filename)
            try:
                os.makedirs(SUM_PATH, exist_ok=True)
                shutil.copy(sum_src, target)
            except Exception as e:
                messagebox.showerror("Error", f"Failed to copy summary image: {e}")
                return

        # 4. Generate JS Code
        cover_js_path = f"img/cover/{cover_filename}" if cover_filename else ""
        sum_js_path = f"img/sum/{sum_filename}" if sum_filename else ""

        safe_title = title.replace("'", "\\'")
        safe_summary = summary_html.replace("'", "\\'")
        
        # Generate object format
        new_entry = f"""    {{
        title: '{safe_title}', 
        review: '{safe_summary}',
        coverPath: '{cover_js_path}', 
        sumPath: '{sum_js_path}', 
        tier: '{tier}',
        year: '{year}',
        hoursPlayed: {playtime},
        achievements: '{achievements}',
        tierScore: {tier_score},
        categories: [{formatted_categories}]
    }},
"""

        # 5. Append to File
        if not os.path.exists(JS_FILE_PATH):
            messagebox.showerror("Error", f"Could not find {JS_FILE_PATH}. Is the script in the main folder?")
            return

        try:
            with open(JS_FILE_PATH, "r", encoding='utf-8') as f:
                content = f.read()

            # Logic: Find the very last "];" closing the array
            last_bracket_index = content.rfind("];")
            
            if last_bracket_index == -1:
                messagebox.showerror("Error", "Could not find closing '];' in gameSetup.js. Ensure the array is closed properly.")
                return

            # Check if the text right before our insertion point needs a comma
            text_before_insert = content[:last_bracket_index].rstrip()
            if text_before_insert.endswith("}"):
                text_before_insert += ","

            # Combine: everything before + newline + new entry + closing bracket
            new_content = text_before_insert + "\n" + new_entry + content[last_bracket_index:]

            with open(JS_FILE_PATH, "w", encoding='utf-8') as f:
                f.write(new_content)

            messagebox.showinfo("Success", f"Game '{title}' added successfully!")
            
            # Clear form
            self.entry_title.delete(0, tk.END)
            self.text_summary.delete("1.0", tk.END)
            self.entry_time.delete(0, tk.END)
            self.entry_achievements.delete(0, tk.END)
            self.entry_tierscore.delete(0, tk.END)
            self.entry_categories.delete(0, tk.END)
            self.lbl_cover.config(text="No file selected")
            self.lbl_sum.config(text="No file selected")
            self.cover_path_var.set("")
            self.sum_path_var.set("")
            self.update_filenames()

        except Exception as e:
            messagebox.showerror("Error", f"Failed to write to JS file: {e}")

if __name__ == "__main__":
    root = tk.Tk()
    app = GameAdderApp(root)
    root.mainloop()